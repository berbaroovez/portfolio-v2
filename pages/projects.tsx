import PageTitles from "./../components/PageTitles";
// import a from "next/a";
import styled from "styled-components";
import { NextSeo } from "next-seo";
export default function Projects() {
  return (
    <ProjectDiv>
      <NextSeo
        title="projects – Carter Olson"
        canonical="https://cartols/projects"
        openGraph={{
          url: "https://cartols/projects",
          title: "projects – Carter Olson",
        }}
      />
      <PageTitles title="Projects" subtitle="💻" />
      <ProjectBox>
        <ProjectTitle>Tarik Duo Extension</ProjectTitle>
        <p>
          Tarik is a twitch streamer and a lot of his chat messages are people
          typing !duo or !call. These are commands that return back who tarik is
          either playing with or in a call with. They are by far his most used
          chat commands. So to help with the spam and create a better user
          experience I created a extension that creates a div that is placed
          under the streaming window and has both of thats commands responses
          nicely formatted. I also added an option that in the twitch sidebar,
          which display all of your followed streamers, to append his duo to his
          name so before you even click into the stream you know who hes playing
          with. This extension can be downloaded{" "}
          <a href="https://chrome.google.com/webstore/detail/tarik-duo/gljpihfdacpdhnhooonajhlecbfedlbe">
            {" "}
            right here{" "}
          </a>
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>BuiltIn Job Buddy Chrome Extension</ProjectTitle>
        <p>
          So when searching for jobs I used numerous websites but my favorite
          one is
          {"  "}
          <a href="https://www.builtinchicago.org/">
            https://www.builtinchicago.org/
          </a>
          . It has the least amount of recruiter spam and all the jobs are
          located near me. Everything is perfect about the site besides the fact
          they dont let you track which jobs you've applied for.
        </p>
        <p>
          So I created a chrome extension that does just that and a little more.
          This extension stores locally which jobs you've applied to and you can
          visually see them because it changes the background of the job posting
          to the color of your choosing. Another features is that it allows you
          to enter in keywords for jobs you do want to see for example: Senior,
          Manager, etc. You have the choice to either highlight those in a
          different color or hide them all together. Overall this has made my
          job search much easier. The extension actually works on all the
          websites that BuiltIn owns so try it out
          {"  "}
          <a href="https://chrome.google.com/webstore/detail/builtin-job-buddy/nfhojnikehhnejbffpmkbmlgkpoefapb">
            right here!
          </a>
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Soccer Team Managament Dashboard</ProjectTitle>
        <p>
          I am an adminstrator for my local soccer club. These duties along with
          everything else include scheduling all home games. The problem with
          trying schedule home games is there are fields that overlap so not
          every team can play at once. To insure no games are conflicting you
          must go to each teams individual page and look at their schedule which
          is time consuming and also very inconvenient when using mobile
          websites.
        </p>
        <p>
          The solution is creating a nextjs powered website in which I can
          create profiles for each team including coaches info and then links to
          their schedules. That information is store in a firebase database. The
          scheduling links are then perodically ran through a script that
          scrapes all the game data. This data is then put back into the
          database so we can list out all homegames on a single page with time
          stamps. This also allows us to track changes to the games as well so
          we can have backlog of when games were updates/rescheduled.
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Task Manager</ProjectTitle>
        <p>
          Live streamer Nathan Stanz had been watching a old british show called
          <span>Task Master </span>
          on stream and wanted to put on his own version of this show for his
          community. He wanted a website to create weekly task that his audience
          would have to complete and submit for points.
        </p>
        <p>
          App was built on a stack of NextJS, styled-components, and supabase.
          The host or moderators could create "Events" that contained tasks
          which were then published to user dashboards. Users could then upload
          their attempts and on the backend the moderators/host could view
          submissions and assign points to the users.
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>SWS Passport</ProjectTitle>
        <p>
          This was my first ever internship. I joined a team who had previously
          created a health wellness checker for private schools for covid
          related questions. Following their success, they wanted to create an
          web app that allowed students to upload their vaccine card to prove
          their vaccination status.
        </p>
        <p>
          This projects main goal was making sure we had everything encrypted.
          We used a service provided by a company called Virgil Security to do
          end to end encryption. The site was built using NextJS and hosted on
          Vercel for easy deployments. My duties included doing a majority of
          the front end work, and ensuring the encryption was working.
        </p>
        <p>
          I learned a lot from this project especially since it was my first
          project with a team and that had a paying customer. I had to decrease
          loading times on the admin dashboard by 90% by not decrypting the
          photos until the were shown. Adding features such as exporting data
          via CSV or adding the ability to create a safelist of allowed emails
          that could sign up.
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Cat Ears for V1</ProjectTitle>
        <p>
          V1 stands for version 1 an north american esports team. In the summer
          of 2021 their valorant team advanced to the first ever LAN for the
          game valorant. As one of underdog teams they came in and won their
          first game with their star player wearing cat ears on his headset.
          Thinking quickly i launched a website where people can upload photos
          and add cat eats to it then download it. I then tweeted at the
          org/posted in their discord.
        </p>
        <p>
          I woke up the following morning to the org posting my website on their
          main
          <a href="https://twitter.com/version1gg/status/1397910742444085259?s=20">
            Twitter
          </a>
          account. . They also launched a hashtag along with it. sooner then
          later twitter profile photos were popping up with cat ears left and
          right. The website got over 3k hits in the first day. Still one of the
          coolest things ive ever built.
          <a href="https://www.catearsforv1.com/">
            It might still be up depending when you see this
          </a>
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Form Summary</ProjectTitle>
        <p>
          <a href="https://www.formsummary.com/">Form Summary</a>, this was a
          simple website made for my mother who does custom sugar cookies. A few
          times a year she does cookie drops and needed a better way to fulfil
          orders. Created a simple website that allow her to upload her
          spreadsheet and see the info in separate cards. First time storing
          data in local storage allowing for the website to be closed and
          reopened to the same info.
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Cacti</ProjectTitle>
        <p>
          <a href="https://drinkcacti.vercel.app/">Cacti</a>, This was just a
          remake of the website used to launch the seltzer brand cacti. I was
          practicing styling and this website seemed unique and simple enough to
          copy.
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Cookie Crumbs</ProjectTitle>
        <p>
          <a href="https://cookiecrumbs.vercel.app/">Cookie Crumbs</a>. Oh boy
          this project taught me a lot and i failed a ton. it was an attempt to
          create an one stop shop for my moms cookie business. ordering forms, a
          backend to accept/deny orders, an order tracker to see what stage a
          order was in, and even a payment system to accept payments.
        </p>
        <p>
          This was my first major project that had a real world goal in mind. I
          learned a lot about when to use server side rendering vs client side
          rendering with NextJS. The difficulty of creating a order form that
          worked for multiple people. I even attempted at creating a form maker
          which i failed at.
        </p>
        <p>
          overall, im proud of this project. I had lots of ambitions and learned
          my limits of my programming knowledge. in the end it failed and i
          never launched it but i learned database design, getting feedback from
          a client, and much more.
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Broke bois PS5</ProjectTitle>
        <p>
          The PS5 launched and i needed some styling/state practice so i remade
          the home screen ui in react.
          <a href="https://ps-5-ui.vercel.app/">PSFive</a>
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Twitch Emote Finder</ProjectTitle>
        <p>
          Twitch streamers have their own emotes but there is two third party
          extensions that add even more custom emotes to chat. For my first ever
          react project i copied one of my favorite sites
          <a href="https://slmn.io/emote">here</a>. Used it as api practice.
          simple. perfect first project.
          <a href="https://twitch-emote-finder.vercel.app/">Emote Finder</a>
        </p>
      </ProjectBox>
    </ProjectDiv>
  );
}

const ProjectDiv = styled.div`
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
`;

const ProjectBox = styled.div`
  p {
    font-weight: 300;
    padding: 10px 0;
    text-transform: lowercase;
  }

  a {
    color: #503cff;
    text-decoration: none;
    font-weight: 600;

    :hover {
      text-decoration: underline;
    }
  }
  margin-bottom: 20px;
`;
const ProjectTitle = styled.h3``;
