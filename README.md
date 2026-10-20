# Operating Jitas

## Next Level Gaming & Esports Arena

Website prototype for the MAST5112 Work-Integrated Learning project. The project explores a digital platform for Next Level Gaming & Esports Arena, a gaming and entertainment venue in Johannesburg, South Africa.

The website is intended to help customers discover the arena, compare packages and experiences, understand planned pricing, and enquire about or book sessions. This repository contains the website prototype; it is separate from the team's React Native mobile application.

## Project Overview

Next Level Gaming & Esports Arena offers gaming packages, esports training, birthday parties, virtual reality, racing simulator challenges, and escape room experiences. The website prototype presents venue information, offering details, prices, and example booking and contact flows.

The site is made up of standalone HTML pages. It does not use a backend, database, build system, or package manager.

## Group Members

| Student number | Name |
|---|---|
| ST10518027 | Phophi Mabila |
| ST10516094 | Neo Ntwampe |
| ST10530153 | Manqoba Jameer Khalil Msiza |

The project was developed collaboratively. The Phase 3 planning document records the shared research, requirements, and design decisions.

## Selected Scenario

Next Level Gaming & Esports Arena is a gaming and entertainment venue established in Johannesburg in 2023. Its offerings include gaming packages, esports training, birthday parties, virtual reality, racing simulator challenges, and esports events.

The team selected this scenario because customers need a convenient way to discover and compare these offerings, while the arena needs a way to reach a wider audience and communicate its services.

## Target Users

The proposed platform is intended to serve:

- Casual and social gamers looking for gaming equipment, internet access, and a social space.
- Competitive and aspiring esports players seeking training, practice, tournaments, and feedback.
- Families planning gaming parties.
- Schools and school groups arranging educational or team-building outings.
- Businesses and teams seeking group activities.
- Visitors interested in VR and other individual experiences.

## Goals and Requirements

The project plan identifies these goals for the digital platform:

- Clearly present the arena and its Johannesburg location.
- Display available packages and individual experiences with prices, purposes, and inclusions.
- Allow customers to make booking requests and request quotations.
- Collect relevant enquiry details, such as name, email, phone number, preferred date, selected packages, group size, and special requests.
- Explain the multi-booking discount structure.
- Provide contact and enquiry information in a mobile-friendly experience.

### Planned Pricing and Discounts

| Offering | Planned price |
|---|---:|
| Each of the four packages | R1,500 |
| Each individual experience | R750 |

| Number of bookings | Discount |
|---:|---:|
| 1 | 0% |
| 2 | 5% |
| 3 | 10% |
| 4 or more | 15% |

## Current Website

The website prototype currently contains:

- Venue information and an about page.
- A package and experience listing in `packages.html`, with concise summaries and links to each offering's detail page.
- Individual detail pages for four packages and three experiences.
- An arena homepage in `index.html` with links to packages, venue information, contact details, and booking.
- A booking-selection mock-up in `fees.html`.
- A contact page with venue address, hours, phone number, and email.
- A contact form that opens the visitor's email app to send an enquiry.

### Current Limitations

- The booking page is a static mock-up. Selecting an offering, date, time, or quantity does not update the summary, and confirming does not submit a booking.
- Sending a contact enquiry requires a configured email app. The site does not store or send messages itself.
- There is no backend, database, user account, payment, or persistent booking functionality.
- Pages reference `styles.css` or `course.css`, but neither stylesheet is present in the repository. The intended page styling therefore is not included here.

## Design Approach

The Phase 3 plan emphasizes user-centred design: clear information, visible prices, straightforward navigation, readable text, accessible buttons, and layouts suited to different screen sizes.

The intended visual direction uses a dark, high-tech gaming aesthetic with neon accents and gaming imagery. The plan's palette includes black (`#0C0C0C`), dark grey (`#1A1A1A`), neon blue (`#00A8FF`), neon purple (`#A100FF`), white (`#FFFFFF`), dark navy (`#0A0F2C`), electric purple (`#7B00FF`), and neon cyan (`#00FFFF`).

## Repository Structure

```text
.
├── README.md
├── index.html
├── about.html
├── packages.html
├── courses.html (redirects to packages.html)
├── fees.html
├── contact.html
├── Ultimate gamer pass.html
├── VIP gaming experience.html
├── Esports Training package.html
├── Birthday Party package.html
├── Virtual Reality.html
├── Racing Simulator challenge.html
├── Escape Room challenge.html
└── assets/
    └── gaming-setup.jpg
```

## Technology

The website prototype uses:

- HTML for page structure and content.
- Google Fonts for the Rajdhani typeface on pages that load it; an internet connection is needed to fetch the font.

## Run the Website

No installation or build step is required. Open `index.html` in a web browser to view the booking-selection prototype.

Alternatively, start a local static web server from the repository root:

```bash
py -m http.server 8000
```

Then open <http://localhost:8000> in a browser. On systems without the `py` launcher, use an installed Python 3 command such as `python -m http.server 8000`.

## Learning Outcomes

Through this project, the team applied and developed skills in:

- Project planning and requirements analysis.
- User-centred design and interface development.
- HTML and CSS website development.
- Research and problem solving.
- Team communication and collaboration.
- GitHub version control.
- Technical documentation.

## References

- GitHub (2026). GitHub documentation. Available at: https://docs.github.com/ (Accessed: 20 October 2026).

- Google (2026). Google Fonts. Available at: https://fonts.google.com/ (Accessed: 20 October 2026).

- Mozilla (2026). HTML documentation. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 20 October 2026).

- Visual Studio Code (2026). Visual Studio Code documentation. Microsoft. Available at: https://code.visualstudio.com/docs (Accessed: 20 October 2026).
