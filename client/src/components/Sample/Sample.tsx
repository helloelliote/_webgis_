import { useEffect, useState } from "react";
// import styled from "styled-components";
import styles from "./Sample.module.scss";

const Sample = (props: unknown) => {
  const [prop, setProp] = useState(props);
  useEffect(() => {
    // TODO
  }, []);
  return (
    <>
      <div className={styles.sampleClass}></div>
    </>
  );
};

// const Styled = styled.div``;

export { Sample };
