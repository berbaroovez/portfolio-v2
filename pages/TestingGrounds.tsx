import styled from "styled-components";

export default function TestinGround() {
  return (
    <TestingZone>
      <ScrollZone>
        <Scrollies>
          <img
            src={
              "https://cdn.bio/assets/images/creators/fear_and_malding/guest_jon.png"
            }
          />
          <p>John Boi</p>
        </Scrollies>
        <Scrollies>
          <img
            src={
              "https://cdn.bio/assets/images/creators/fear_and_malding/guest_jon.png"
            }
          />
          <p>John Boi</p>
        </Scrollies>
        <Scrollies>
          <img
            src={
              "https://cdn.bio/assets/images/creators/fear_and_malding/guest_jon.png"
            }
          />
          <p>John Boi</p>
        </Scrollies>
        <Scrollies>
          <img
            src={
              "https://cdn.bio/assets/images/creators/fear_and_malding/guest_jon.png"
            }
          />
          <p>John Boi</p>
        </Scrollies>
        <Scrollies>
          <img
            src={
              "https://cdn.bio/assets/images/creators/fear_and_malding/guest_jon.png"
            }
          />
          <p>John Boi</p>
        </Scrollies>
      </ScrollZone>
    </TestingZone>
  );
}

const TestingZone = styled.div`
  width: 400px;
  height: 800px;
  background-color: grey;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const ScrollZone = styled.div`
  display: grid;
  grid-gap: 16px;
  padding: 16px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(160px, 1fr);
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;
const Scrollies = styled.div`
  /* align-self: center; */
  /* display: block; */
  /* width: 150px; */
  /* img {
    height: 150px;
    width: 150px;
  }
  text-align: center; */
`;
