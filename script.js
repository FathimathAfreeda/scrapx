// =============================
// SUPABASE CONNECTION
// =============================
const SUPABASE_URL = "https://kddqyzjtbexbsnsgjflx.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZHF5emp0YmV4YnNuc2dqZmx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5ODcyNDgsImV4cCI6MjA4NjU2MzI0OH0.Eqz07sGfZ11dQsR1xVfx3Nc5SON_E0x8EmJV-e0urrI";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("Supabase Connected!");


// =============================
// PAGE NAVIGATION
// =============================
function openCollector() {
    window.location.href = "collector.html";
}

function openProvider() {
    window.location.href = "provider.html";
}


// =============================
// COLLECTOR REGISTRATION
// =============================
async function registerCollector() {

    const name = document.getElementById("cname").value;
    const phone = document.getElementById("cphone").value;
    const area = document.getElementById("carea").value;

    if(!name || !phone){
        alert("Fill all fields");
        return;
    }

    const { data, error } = await supabaseClient
        .from("collectors")
        .insert([{ name, phone, area }]);

    if(error){
        alert("Error saving!");
        console.log(error);
    } else {
        alert("Registration Successful!");
        window.location.reload();
    }
}


// =============================
// FETCH COLLECTORS BY AREA
// =============================
async function loadCollectors() {

    const area = document.getElementById("parea").value;

    const { data, error } = await supabaseClient
        .from("collectors")
        .select("*")
        .eq("area", area);

    const list = document.getElementById("collectorList");
    list.innerHTML = "";

    data.forEach(c => {
        const option = document.createElement("option");
        option.text = c.name + " (" + c.phone + ")";
        option.value = c.name;
        list.add(option);
    });
}


// =============================
// SUBMIT PICKUP REQUEST
// =============================
// =============================
// SUBMIT PICKUP REQUEST
// =============================
async function submitRequest(){

    const pname = document.getElementById("pname").value;
    const area = document.getElementById("parea").value;
    const collector = document.getElementById("collectorList").value;
    const time = document.getElementById("ptime").value;

    const types = document.querySelectorAll(".stype");
    const weights = document.querySelectorAll(".sweight");
    const units = document.querySelectorAll(".sunit");

    let itemsArray = [];

    for(let i = 0; i < types.length; i++){

        if(weights[i].value !== ""){
            itemsArray.push({
                item: types[i].value,
                weight: Number(weights[i].value),
                unit: units[i].value
            });
        }
    }

    if(itemsArray.length === 0){
        alert("Add at least one scrap item");
        return;
    }

    const { error } = await supabaseClient
        .from("pickup_requests")
        .insert([{
            provider_name: pname,
            area: area,
            collector_name: collector,
            items: itemsArray,   // ✅ JSONB data
            pickup_time: time
            // status auto = pending
        }]);

    if(error){
        console.log(error);
        alert("Failed!");
    } else {
        alert("Pickup Requested Successfully!");
        window.location.reload();
    }
}
// =============================
// LOAD PICKUP REQUESTS (DASHBOARD)
// =============================
async function loadRequests() {

    const { data, error } = await supabaseClient
        .from("pickup_requests")
        .select("*");

    const table = document.getElementById("requestTable");
    table.innerHTML = "";

    if(error){
        console.log(error);
        alert("Error loading requests");
        return;
    }

    data.forEach(req => {

        let itemsText = "";

        req.items.forEach(i => {
            itemsText += `${i.item} (${i.weight}${i.unit})<br>`;
        });

        const row = `
            <tr>
                <td>${req.provider_name}</td>
                <td>${itemsText}</td>
                <td>${req.area}</td>
                <td>${req.pickup_time}</td>
                <td>${req.collector_name}</td>
            </tr>
        `;

        table.innerHTML += row;
    });
}
// =============================
// ADD MORE SCRAP ITEMS
// =============================
function addItem() {

    const container = document.getElementById("itemsContainer");

    const newItem = document.createElement("div");

    newItem.className = "scrapItem";

    newItem.innerHTML = `
        <select class="stype">
            <option>Plastic</option>
            <option>Metal</option>
            <option>Paper</option>
            <option>Glass</option>
            <option>E-Waste</option>
        </select>

        <input type="number" class="sweight" placeholder="Weight">

        <select class="sunit">
            <option>kg</option>
            <option>g</option>
        </select>
    `;

    container.appendChild(newItem);
}