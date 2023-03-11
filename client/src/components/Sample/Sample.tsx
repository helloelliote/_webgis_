import { SampleProps } from "../../types";
import "./Sample.scss";

const Sample = (props: SampleProps) => {
  return <div>{props.name}</div>;
};

export { Sample };
