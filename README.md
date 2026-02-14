SCRAPX-Turn Your Trash Into Cash 🎯
Basic Details
Team Name:Orion
Team Members
Member 1: Fathimath Afreeda P A - LBSCEK
Member 2: Zainabath Haniya -LBSCEK
Hosted Project Link
[https://scrapx-rust.vercel.app/]

Project Description
ScrapX is a web app that connects scrap providers with collectors, allowing easy scheduling of pickups. Users can submit requests with item types and weights and track them through a dashboard, making scrap collection simple and organized.

The Problem statement
Managing scrap collection is often disorganized. Scrap providers struggle to find collectors, and collectors face difficulty scheduling pickups efficiently. This leads to delays, missed collections, and wasted recyclable materials.

The Solution
ScrapX simplifies scrap collection by connecting providers and collectors through a web app. Users can submit pickup requests with item types and weights, track them via a dashboard, and schedule collections efficiently, promoting recycling and reducing waste.

Technical Details
Technologies/Components Used
For Software:
Languages used:[HTML,CSS,JavaScript,Supabase]
Tools used: [ VS Code, Git]

Features
List the key features of your project:
Feature 1: [User registeration and Login for collectors]
Feature 2: [Submit scrap pickup requests with multiple item type and weights]
Feature 3: [Dashboard to track and manage scrap pick up requests]
Feature 4: [Easy scheduling and management of scrap collections]

Implementation
Software:
Any modern web browser (Chrome, Edge, Firefox, etc.)
Internet connection (for Supabase database)
Installation:
No installation required for local files. Just download or clone the repository:
git clone https://github.com/FathimathAfreeda/scrapx.git
Run:
Open the project folder and double-click index.html, or
Right-click index.html → Open with → choose your browser

Project Documentation
For Software:
Screenshots: 
https://drive.google.com/file/d/1hWZh_k2NrMh8YSkY9VmgiO_96mYtj-jM/view?usp=drivesdk
*ScrapX Landing Page – Choose to Register as Collector or Submit Scrap Request*

https://drive.google.com/file/d/1CsTgXKfSuvvqPQO4TBmvu3zwnN0EeRY1/view?usp=drivesdk
*Scrap Pickup Request Page – Submit scrap items with type, weight, and schedule pickup*

https://drive.google.com/file/d/1KEITH6aOyxatpjJcrV0uH5LxetfG0TOS/view?usp=drivesdk
*Sign up page for collectors to join ScrapX*

https://drive.google.com/file/d/1dp-hPEfJ4LmKFEyNGA-_wIVFMngBU9kp/view?usp=drivesdk
*Collector Dashboard – Track and manage all assigned scrap pickup requests*

System Architecture
Explanation:
ScrapX follows a web-based client-server architecture.
Components:
Frontend: HTML, CSS, JavaScript – handles user interface, form submissions, and dashboard views.
Backend/Database: Supabase – stores user data, scrap requests, and manages authentication.
Browser: Users interact via a web browser; data is sent/received from Supabase in real-time.
Data Flow:
User accesses the app via browser.
Requests (signup, scrap pickup, dashboard updates) are sent to Supabase.
Supabase processes requests, stores data, and sends responses.
Frontend updates the UI dynamically based on responses.
Tech Stack Interaction:
HTML/CSS/JS handle the interface and interactivity.
Supabase handles database, authentication, and data storage.

Application Workflow
User opens ScrapX → registers or logs in.
Collector or provider can submit scrap requests (items & weights).
Requests are stored in Supabase.
Users access the dashboard to track or manage requests.
Notifications/updates flow back from Supabase to the dashboard in real-time.

Additional Documentation
For Web Projects with Backened:
ScrapX uses **Supabase** for database and authentication.  
- Users and scrap requests are stored in Supabase tables.  
- Frontend communicates with Supabase directly using JavaScript.  
- No custom API endpoints were created.

Project Demo
Video
https://drive.google.com/file/d/16Nd4EFcAlla8Qz-Ubf3ueCu0n5UzqquZ/view?usp=drivesdk

TEAM CONTRIBUTION 
Fathimath Afreeda P A
. design and implemented frontend pages
. added UI styling using css
. added basic JS functionality for forms and dashboard updates
Zainabath Haniya
. integrated supabase backend
. connected frontend with supabase using JS SDK
. Tested and debugged the workflow
