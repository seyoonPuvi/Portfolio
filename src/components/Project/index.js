import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Grid } from "react-loader-spinner";

const ProjectContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  background-color: #ff3822;

  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  padding: 5rem 2rem;

  @media (min-width: 768px) {
    width: 50%;
    min-height: 100vh;
  }
`;

const RightContainer = styled.div`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding: 5rem 1rem;

  @media (min-width: 768px) {
    width: 50%;
    min-height: 100vh;
  }
`;

const Title = styled.h1`
  font-size: 12rem;
  color: #ffffff;
  font-family: "Catamaran", sans-serif;
  letter-spacing: 2px;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: 10rem;
  font-family: "Oswald";
  letter-spacing: 1px;
  white-space: normal;
  word-break: normal;
  overflow-wrap: anywhere;
  line-height: 1.2;

  transition: all 0.45s ease-out;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
`;

const ProjectTabContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-inline-start: 0;
  gap: 1.5rem;
  margin-top: 5rem;
`;

const ProjectTab = styled.li`
  list-style: none;
`;

const TabButton = styled.button`
  background-color: ${(props) => (props.isActive === true ? "black" : "white")};
  border: 1px solid black;
  outline: none;
  border-radius: 1.2rem;
  padding: 1rem;
  color: ${(props) => (props.isActive === false ? "black" : "white")};
  font-weight: bolder;
  cursor: pointer;
  transition: all 0.45s ease-out;

  width: 12rem;
`;

const ProjectCardContainer = styled.ul`
  padding-inline-start: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem 2rem;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

const ProjectName = styled.h1`
  font-size: 2rem;
  color: #801515;
  font-family: "Catamaran", serif;
  font-weight: bold;
`;

const ProjectCard = styled.li`
  background-color: white;
  list-style: none;
  padding: 2rem 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.45s ease-out;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.1);
    background-color: #ff3822;
  }

  &:hover ${ProjectName} {
    color: white;
  }
`;

const ProjectImageCard = styled.img`
  height: 18rem;
  width: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 1rem;
`;

const LoaderContainer = styled.div`
  height: 50rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ProjectDesc = styled.p`
  font-size: 1.2rem;
  font-family: "Catamaran", seif;
  color: black;
  font-weight: bold;
`;

const NoProject = styled.div`
  height: 50rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const projectsList = {
  react: [
    {
      id: 1,
      title: "Nxt-Trends",
      desc: "Ecommerce Shopping Website",
      link: "https://VKtrnd.ccbp.tech",
      imageUrl: "https://i.postimg.cc/bJ88zkjV/shopping.png",
    },
    {
      id: 2,
      title: "Nxt-Watch",
      desc: "Online Video Streaming Application",
      link: "https://VKWcH.ccbp.tech",
      imageUrl: "https://i.postimg.cc/85BpWwHV/video.png",
    },
    {
      id: 3,
      title: "Jobby-App",
      desc: "Online Job Seeking Application",
      link: "https://Vkjb.ccbp.tech",
      imageUrl: "https://i.postimg.cc/RCLhnCsn/job.png",
    },
    {
      id: 4,
      title: "Insta-Share",
      desc: "Social Media Application",
      link: "https://Vkinstashare.ccbp.tech",
      imageUrl: "https://i.postimg.cc/q7k2yCkW/instagram.png",
    },
    {
      id: 5,
      title: "RPS-Game",
      desc: "Rock Paper Scissor Application",
      link: "https://VKRPS.ccbp.tech",
      imageUrl: "https://i.postimg.cc/sx5ShD6f/game-over.png",
    },
    {
      id: 6,
      title: "Gradient-Generator",
      desc: "CSS Gradient generator Application",
      link: "https://VKCSSGradient.ccbp.tech",
      imageUrl: "https://i.postimg.cc/ZnYZrwj9/color-circle.png",
    },
  ],
  webdesign: [
    {
      id: 1,
      title: "VK-Studio",
      desc: "PhotoGraphic Landing Portfolio",
      link: "https://seyoonpuvi.github.io/VKstudio-Responsive_Website/",
      imageUrl: "https://i.postimg.cc/pLHp9hx8/camera.png",
    },
    {
      id: 2,
      title: "VK-Fit",
      desc: "Fittness Center Landing Portfolio",
      link: "",
      imageUrl: "https://i.postimg.cc/cCtNhm7H/weightlifting.png",
    },

    {
      id: 3,
      title: "VK-Events",
      desc: "Events Info Website",
      link: "",
      imageUrl: "https://i.postimg.cc/d0Ft0z29/event.png",
    },

    {
      id: 4,
      title: "Web-VR",
      desc: "VR Promotion Website",
      link: "https://vkvrpage.ccbp.tech",
      imageUrl: "https://i.postimg.cc/d0R3mqsX/virtual-glasses.png",
    },
  ],
  javascript: [
    {
      id: 1,
      title: "FLAMES-APP",
      desc: "90's kids Nostalogic Game",
      link: "https://seyoonpuvi.github.io/FLAMES-JS/",
      imageUrl: "https://i.postimg.cc/150z17S1/love.png",
    },
    {
      id: 2,
      title: "VK-ScreenCapture",
      desc: "screen cast and screen capture website",
      link: "https://seyoonpuvi.github.io/Capture-Cast-JS/",
      imageUrl:
        "https://i.postimg.cc/g02jDVfF/ooooooooooooooooooooooooooooooooooo.png",
    },
    {
      id: 3,
      title: "Infinite-Scroller",
      desc: "Image Gallery",
      link: "https://seyoonpuvi.github.io/InfiniteScroller-JS/",
      imageUrl: "https://i.postimg.cc/Pxcj1Yk4/picture.png",
    },
    {
      id: 4,
      title: "VK-Weather-App",
      desc: "Weather application with interactive Background",
      link: "https://seyoonpuvi.github.io/WeatherApp-JS/",
      imageUrl: "https://i.postimg.cc/xTm0yx8b/cloudy.png",
    },
  ],
  fullstack: [],
};

const TabList = [
  {
    id: "webdesign",
    displayName: "WEBDESIGN",
  },
  {
    id: "react",
    displayName: "REACT",
  },
  {
    id: "javascript",
    displayName: "JAVASCRIPT",
  },
  {
    id: "fullstack",
    displayName: "FULLSTACK",
  },
];

const Project = () => {
  const [projectInfo, setTab] = useState({
    activeTab: "webdesign",
    isLoading: true,
    ToDisplay: [],
  });

  useEffect(() => {
    const { activeTab } = projectInfo;
    const activeProjects = projectsList[activeTab];

    setTab((prev) => ({
      ...prev,
      activeTab,
      isLoading: false,
      ToDisplay: activeProjects,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectInfo.activeTab, projectInfo.isLoading]);

  const onClickTab = (id) => {
    setTab((prev) => ({ ...prev, activeTab: id, isLoading: true }));
  };

  const onRenderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Grid type="ThreeDots" color="white" height="50" width="50" />
    </LoaderContainer>
  );

  const onRenderView = () => {
    if (projectInfo.isLoading) {
      return onRenderLoader();
    } else {
      if (projectInfo.ToDisplay.length !== 0) {
        return (
          <ProjectCardContainer>
            {projectInfo.ToDisplay.map((each) => (
              <ProjectCard
                key={each.id}
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="300"
                as="a"
                href={each.link}
                target="_blank"
              >
                <ProjectImageCard src={each.imageUrl} alt="image" />
                <ProjectInfo>
                  <ProjectName>{each.title}</ProjectName>
                  <ProjectDesc>{each.desc}</ProjectDesc>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectCardContainer>
        );
      }
      return (
        <NoProject>
          <Heading>Project Will Be Updated Soon</Heading>
        </NoProject>
      );
    }
  };
  //
  return (
    <ProjectContainer id="project">
      <LeftContainer>
        <Title data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
          PROJECTS
        </Title>
        <Heading
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          Here are some of my selected projects worth sharing.
        </Heading>
      </LeftContainer>
      <RightContainer>
        <ProjectTabContainer>
          {TabList.map((each) => (
            <ProjectTab key={each.id}>
              <TabButton
                type="button"
                onClick={() => onClickTab(each.id)}
                isActive={projectInfo.activeTab === each.id}
              >
                {each.displayName}
              </TabButton>
            </ProjectTab>
          ))}
        </ProjectTabContainer>
        {onRenderView()}
      </RightContainer>
    </ProjectContainer>
  );
};

export default Project;
