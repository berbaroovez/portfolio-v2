import styled from "styled-components";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";

const TestModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger>Open Portal</Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              {/* <motion.div
                style={{
                  position: "fixed",
                  backgroundColor: "red",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              ></motion.div> */}
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "400px",
                }}
              >
                Note how the first feels rougher, and the second feels smoother.
                The first has more patchy areas of light and dark, but it's more
                consistent and has a flatter feeling. The second has much more
                visible long lines that lead the eye, and break up the image in
                a particular way. Another consideration is if you're blending
                colors. The shorter curves may keep distinct sections of colors
                more separate, where longer curves may drag one color further
                into another color's section. When I'm using a lot of color
                variation, I usually pick a short to medium length curve to
                avoid really drawn out blending areas:
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

const users = [
  "user1",
  "user2",
  "user3",
  "user4",
  "user5",
  "user6",
  "user7",
  "user8",
  "user9",
  "user10",
  "user11",
  "user12",
];
const RoomModal = () => {
  const [openDialog, setOpen] = useState(false);
  return (
    <Dialog.Root open={openDialog} onOpenChange={setOpen}>
      <DialogTrigger>|||</DialogTrigger>
      <AnimatePresence>
        {openDialog && (
          <Dialog.Portal forceMount>
            <DialogOverlay asChild forceMount />

            <Dialog.Content asChild forceMount>
              <UserNames
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "linear" }}
              >
                {users.map((user, index) => {
                  return (
                    <UserInfo>
                      <div>{user}</div>
                      <Cards>
                        <Card src="/cards/ClubsKing.svg" />
                        <Card src="/cards/ClubsKing.svg" />
                        <Card src="/cards/ClubsKing.svg" />
                        <Card src="/cards/ClubsKing.svg" />
                      </Cards>
                    </UserInfo>
                  );
                })}
              </UserNames>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

const UserInfo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = styled.img`
  width: 80px;
  height: 100px;
`;

const UserNames = styled(motion.div)`
  display: flex;
  padding: 20px;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  align-items: flex-start;
  gap: 20px;
  height: 100vh;
  width: 400px;
  background-color: #2695a3;
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: scroll;
`;

const DrinkModal = () => {
  return (
    <DialogRoot>
      <DialogTrigger>Sup</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />

        <Dialog.Content>
          <ContentDiv
            initial={{ opacity: 0.5, y: 5, scaleX: 0.9, scaleY: 0.7 }}
            animate={{ opacity: 1, y: 0, scaleX: 1, scaleY: 1 }}
          >
            <Dialog.Title>Sup</Dialog.Title>
            <h1>THIS IS A FUCKING TEST</h1>
          </ContentDiv>
        </Dialog.Content>
      </DialogPortal>
    </DialogRoot>
  );
};

const DialogRoot = styled(Dialog.Root)``;
const DialogTrigger = styled(Dialog.Trigger)`
  position: fixed;
  top: 0;
  right: 0;
`;
const ContentDiv = styled(motion.div)`
  position: absolute;
  width: 450px;
  height: 300px;
  top: 50%;
  margin-top: -150px;
  margin-left: -225px;
  left: 50%;
  background: #5124bb;
`;
const DialogPortal = styled(Dialog.Portal)``;
const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  background-color: #5e885e60;
  inset: 0;
`;

const Test = () => {
  return (
    <>
      <TestModal />
      <DrinkModal />
      <RoomModal />
      <h1>Look this is my testing page don't snitch man </h1>{" "}
      <StripeButton>
        {/* <FirstSpan className="first">Check Out</FirstSpan>{" "}
        <SecondSpan className="second">Submiting...</SecondSpan>{" "}
        <ThirdSpan className="third">Completed!</ThirdSpan> */}
      </StripeButton>
    </>
  );
};

const StripeButton = styled.button`
  overflow: hidden;
position: relative;
  border: none;
  padding: 5px 10px;
  width: 200px;
  background: #257bdf;
  .
`;

const ButtonSpans = styled.span`
  display: block;
`;
const FirstSpan = styled(ButtonSpans)`
  transform: translateY(0%);
  transition: transform 0.5s ease-in-out;

  ${StripeButton}:hover & {
    transform: translateY(-100%);
  }
`;
const SecondSpan = styled(ButtonSpans)`
  position: absolute;
  top: 15%;
  /* left: 50%; */
  transform: translate(50%, 100%);

  transition: transform 0.5s ease-in-out;

  ${StripeButton}:hover & {
    transform: translate(50%, 0%);
  }
`;
const ThirdSpan = styled(ButtonSpans)`
  position: absolute;
`;

export default Test;
