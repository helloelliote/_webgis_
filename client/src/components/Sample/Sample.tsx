import { SampleProps } from "../../types";
import "./Sample.scss";

export function Sample(props: SampleProps) {
  return <div>{props.name}</div>;
}
