import styled from "styled-components";
import PageTitles from "./../components/PageTitles";
import Link from "next/link";
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
      <PageTitles title="Projects" subtitle="yes there is spelling mistakes" />
      <ProjectBox>
        <ProjectTitle>Task Manager</ProjectTitle>
        <p>
          Live streamer Nathan Stanz had been watching a old birtish show called{" "}
          <span>Task Master </span> on stream and wanted to put on his own
          version of this show for his community. He wanted a website to create
          weekly task that his audience would have to complete and submit for
          points.
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
          the front end work, and ensuring the enecryption was working.
        </p>

        <p>
          I learned a lot from this project especially since it was my first
          project with a team and that had a paying customer. I had to decrease
          loading times on the admin dashboard by 90% by not unencrypting the
          photos until the were shown. Adding feautures such as exporting data
          via CSV or adding the ability to create a safelist of allowed emails
          that could sign up.
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Form Summary</ProjectTitle>
        <p>
          <Link href="https://www.formsummary.com/"> Form Summary </Link>, this
          was a simple website made for my mother who does custom sugar cookies.
          A few times a year she does cookie drops and needed a better way to
          fulfil orders. Created a simple website that allow her to upload her
          spreadsheet and see the info in seperate cards. First time storing
          data in local storage allowing for the website to be closed and
          reopened to the same info.
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Cacti</ProjectTitle>
        <p>
          <Link href="https://drinkcacti.vercel.app/"> Cacti </Link>, This was
          just a remake of the website used to launch the seltzier brand cacti.
          I was practing styling and this website seemed unique and simple
          enough to copy.
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Cookie Crumbs</ProjectTitle>
        <p>
          <Link href="cookiecrumbs.vercel.app"> Cookie Crumbs </Link> . Oh boy
          this project taught me alot and i failed a ton. it was an attempt to
          create an one stop shop for my moms cookie buisness. ordering forms, a
          backend to accept/deny orders, an order tracker to see what stage a
          order was in, and even a payment system to accept payments.
        </p>
        <p>
          This was my first major project that had a real world goal in mind. I
          learned a lot about when to use server side rendering vs client side
          rendering with NextJS. The diffuclty of creating a order form that
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
          the home screen ui in react.{" "}
          <Link href="https://ps-5-ui.vercel.app/">PSFive</Link>
        </p>
      </ProjectBox>
      <ProjectBox>
        <ProjectTitle>Twitch Emote Finder</ProjectTitle>
        <p>
          Twitch streamers have their own emotes but there is two third party
          extensions that add even more custom emotes to chat. For my first ever
          react project i copied one of my favorite sites{" "}
          <Link href="https://slmn.io/emote">here</Link>. Used it as api
          practice. simple. perfect first project.{" "}
          <Link href="https://twitch-emote-finder.vercel.app/">
            Emote Finder
          </Link>
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
