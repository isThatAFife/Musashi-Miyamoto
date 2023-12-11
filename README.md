# Miyamoto Musashi - The Sword Divinity

A brief outline of the life of the legendary swordsman and philosopher Miyamoto Musashi. This website aims to educate users on important events throughout Musashi's life that contributed to his later philosophies and writing of *The Book of Five Rings*. It also includes a section about references to Musashi in popular culture including movies, anime and video games.

Find the live site [here]

[here]: https://isthatafife.github.io/Musashi-Miyamoto/

---

## Contents

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

  ---

  ## User Experience (UX)

  ### Initial Discussion

  The website aims to be a clear and concise summary of Miyamoto Musashi's life, influences and philosophy for people who are interested in Japanese history, Buddhist philosophy and/or have an interest in the history of Kenjutsu.

  #### Key Areas Covered

    - Brief introduction
    - Biography of Musashi Miyamoto broken down into:
      - Early Life
      - Life as a warrior and notable duels
      - Mature Years
      - Final Years
    - Miyamoto's philosophies and how they relate to:
      - His unique sword style
      - Religion
      - Art
    - Miyamoto's influence in popular culture, including:
      - Novels
      - Movies
      - Anime
      - Manga
      - Video games
    - Users can sign up for a monthly newsletter updating them on all Musashi Miyamoto news

## User Stories

### Client Goals

- To be able to view the site on a range of device sizes.
- To make it easy for users to navigate and learn about the subject matter.
- To make the design and layout visually appealing to maintain interest.
- To allow users to sign up for the newsletter.

### First Time Visitor Goals

- I want to quickly and clearly find out what the site is about.
- I want to be able to navigate the site easily.
- I want to be able to learn as much as I can about the subject matter.
- I want to be able to sign up for a newsletter in order to stay updated.

### Returning Visitor Goals

- I want to refresh my knowledge of the subject matter.
- I want to use the website as research.

---

## Design

The website is aimed towards a "historical" look, almost as if printed on parchment paper. This is achieved with the pale tan colouring and textures added to the header and main body backgrounds.

### Typography

Google Fonts was used for the following fonts:

  - Merriweather is used for headings and content on the site. It is a serif font.

### Imagery

Imagery will consist mainly of historical woodblock prints with some photos of modern-day statues of Miyamoto Musashi.

### Wireframes

Wireframes were created for mobile and desktop.

[Mobile]

[Desktop]

[Mobile]: docs/wireframes/mm-wireframe-1.png
[Desktop]: docs/wireframes/mm-wireframe-2.png

## Features

The website has two pages: the main page containing all information under separate headings which are accessible through a navbar at the top of the page. The second page is a thank you page displayed after users have signed up for the newsletter using the form on the main page. It also includes a return button to return users to the main page.

- The main page has:
  - A responsive navbar at the top allowing users to quickly navigate the page. To allow good UX, the menu items are replaced with a "burger button" using media queries for users on mobile devices.
  - A footer that includes links to all major social medias.

- The thank you page has:
  - A return button to allow users to return to the main page after signing up.

- Future implementations:
  - An events calendar to showcase any events relating to Musashi Miyamoto (Lectures, movie screenings, etc.)

## Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. I have achieved this by:

  - Using semantic HTML.
  - Using descriptive alt attributes on images on the site.
  - Providing information for screen readers where there are icons used and no text - such as the footer icons.
  - Ensuring that there is a sufficient colour contrast throughout the site.
  - Ensuring that all sections of the main page are easily accessible at all times by making the header navbar stick to the top of the page while users scroll.

  ---

  ## Technologies Used

  ### Languages Used

  HTML5 and CSS were used to create this website.

  ### Frameworks, Libraries & Programs Used

  Balsamiq - Used to create wireframes.

  Git - For version control.

  Github - To save and store the files for the website.

  Google Fonts - To import the fonts used on the website.

  Font Awesome - For the iconography on the website.

  Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

  Affinity Photo - To edit the alpha channel of certain images used on the website.

  [Tiny PNG](https://tinypng.com/) To compress images.

  [Pixlied](https://pixelied.com) To convert images to webp format.

  [Favicon.io](https://favicon.io/) To create favicon.

  [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

  ---

## Deployment & Local Development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, Musashi-Miyamoto.
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

#### How to Fork

To fork the Musashi-Miyamoto repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, isthatafife/Musashi-Miyamoto.
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the Musashi-Miyamoto repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, isthatafife/Musashi-Miyamoto.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Testing was ongoing throughout the entire build of the website. I used Chrome developer tools extensively during development to troubleshoot issues.

### W3C Validator

### Solved Bugs

1. On some screen sizes the header would overlap with the content meant to be displayed at the top of the screen. I found a thread on Stack Overflow that recommended adding a transparent border the same size as the header to the top of each of my sections. This seemed to fix the issue.
2. 

### Known Bugs

### Testing User Stories

  First Time Visitor Goals

- I want to quickly and clearly find out what the site is about.
- I want to be able to navigate the site easily.
- I want to be able to learn as much as I can about the subject matter.
- I want to be able to sign up for a newsletter in order to stay updated.

### Returning Visitor Goals

- I want to refresh my knowledge of the subject matter.
- I want to use the website as research.

### Lighthouse

#### Main Page

#### Thank You Page

### Full Testing

---

## Credits

### Code Used

### Content

### Media

### Acknowledgements
