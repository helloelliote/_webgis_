import { useEffect, useState } from "react";
import styled from "styled-components";

const Sample = (props: unknown) => {
  const [prop, setProp] = useState(props);
  useEffect(() => {
    // TODO
  }, []);
  return (
    <>
      <Styled></Styled>
    </>
  );
};

const Styled = styled.div``;

export { Sample };
