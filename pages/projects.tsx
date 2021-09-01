import styled from "styled-components";
import PageTitles from "./../components/PageTitles";

export default function Projects() {
  return (
    <ProjectDiv>
      <PageTitles title="Projects" subtitle="some things I've made" />
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
`;
const ProjectTitle = styled.h3``;
