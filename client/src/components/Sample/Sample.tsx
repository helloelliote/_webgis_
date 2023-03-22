import { useEffect, useState } from "react";
import { SampleProps } from "../../types";
// import styled from "styled-components";
import styles from "./Sample.module.scss";

/**
 * @param props
 * @category Component
 */
const Sample = (props: SampleProps): JSX.Element => {
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
