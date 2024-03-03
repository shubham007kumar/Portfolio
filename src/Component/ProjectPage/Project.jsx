/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Img,
  Img2,
  Sub1,
  Sub10,
  Sub2,
  Sub3,
  Sub4,
  Sub5,
  Sub6,
  Sub7,
  Sub8,
  Sub9,
} from "./ProjectStyle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
export const Project = () => {
  return (
    <>
      <Container id="project">
        <h2 className="build">Some Thing I've Build</h2>
        <Sub6>
          <Sub7>
            <h2>Akatsuki</h2>
            <Sub10>
              This is the project that We developed during Hackathon. We are
              trying to build an examination portal for the CBSE students who
              are facing problems during pandemics.
            </Sub10>
            <Sub8>
              <p>React.js</p>
              <p>React-redux</p>
              <p>Express</p>
              <p>MongoDB</p>
            </Sub8>
            <Sub9>
              <a
                href="https://github.com/avinashkumarsinha007/Akatsuki-hackathon"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                {" "}
                <GitHubIcon />{" "}
              </a>
              <a
                href="https://cbseexamportal.netlify.app/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                {" "}
                <OpenInNewIcon />
              </a>
            </Sub9>
          </Sub7>
          <Img2
            src="https://user-images.githubusercontent.com/34106521/128633878-a86d79da-6bdc-42ac-835b-09651f776828.PNG"
            alt="blank"
          />
        </Sub6>
        <Sub1>
          <Img src="3.png" alt="blank" />
          <Sub2>
            <h2>Nykaa</h2>
            <Sub3>
              Nykaa derived from Sanskrit work 'Nayaka' means actress or one in
              the spotlight. Nykaa is a leading beauty product website across
              the global. It make our life easier to buy any beauty product
            </Sub3>
            <Sub4>
              <p>React.js</p>
              <p>React-redux</p>
              <p>Styled-components</p>
            </Sub4>
            <Sub5>
              <a
                href="https://github.com/shubham007kumar/Nykaa"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                {" "}
                <GitHubIcon />{" "}
              </a>
              <a
                href="https://shubham-nykaa.netlify.app/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                {" "}
                <OpenInNewIcon />
              </a>
            </Sub5>
          </Sub2>
        </Sub1>

        <Sub6>
          <Sub7>
            <h2>Indiegogo</h2>
            <Sub10>
              With Indiegogo, user have the opportunity to support entrepreneurs
              and new technology from the earliest stages of development.
            </Sub10>
            <Sub8>
              <p>React.js</p>
              <p>React-redux</p>
              <p>Styled-components</p>
            </Sub8>
            <Sub9>
              <a
                href="https://github.com/Bhargav1224/Nitrogen-IndieGogo"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                {" "}
                <GitHubIcon />{" "}
              </a>
              <a
                href="https://indiegogo.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                {" "}
                <OpenInNewIcon />
              </a>
            </Sub9>
          </Sub7>
          <Img2
            src="https://user-images.githubusercontent.com/77038785/132513780-4eeac5e8-04f9-4cee-8181-943e624817c1.PNG"
            alt="blank"
          />
        </Sub6>

        <Sub1>
          <Img
            src="https://user-images.githubusercontent.com/77038631/111079859-ee199100-8521-11eb-838a-75a59491dcac.jpg"
            alt="blank"
          />
          <Sub2>
            <h2>Himalaya</h2>
            <Sub3>
              Himalaya has been passionate about the healing wisdom of herbs. We
              offer a wide range of clinically-studied herbal supplements,
              toothpaste and personal care products that unlock the powerful
              healing benefits of herbs
            </Sub3>
            <Sub4>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </Sub4>
            <Sub5>
              <a
                href="https://github.com/rao-kartik/himalaya-clone"
                rel="noreferrer"
                target="_blank"
                style={{ color: "inherit" }}
              >
                {" "}
                <GitHubIcon />{" "}
              </a>
              <a
                href="https://rao-kartik.github.io/himalaya-clone/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                {" "}
                <OpenInNewIcon />
              </a>
            </Sub5>
          </Sub2>
        </Sub1>

        <Sub6>
          <Sub7>
            <h2>Buffer</h2>
            <Sub10>
              we’re working to build the best products to help our customers
              build their brands and grow their businesses on social media
            </Sub10>
            <Sub8>
              <p>HTML</p>
              <p>CSS</p>
            </Sub8>
            <Sub9>
              <a
                href="https://github.com/shubham007kumar/Buffer_project"
                rel="noreferrer"
                target="_blank"
                style={{ color: "inherit" }}
              >
                {" "}
                <GitHubIcon />{" "}
              </a>
              <a
                href="https://shubham007kumar.github.io/Buffer_project/index.html"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                {" "}
                <OpenInNewIcon />
              </a>
            </Sub9>
          </Sub7>
          <Img2 src="4.png" alt="blank" />
        </Sub6>
      </Container>
    </>
  );
};
