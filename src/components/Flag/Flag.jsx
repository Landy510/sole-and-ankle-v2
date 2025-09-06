import styled from "styled-components"
import { COLORS, WEIGHTS } from "../../constants";
function Flag(props) {
  const {variant} = props;
  const settings = decideSettings(variant);
  return (
    <Wrapper $bgColor={settings.bgColor}>{settings.text}</Wrapper>
  )
}

const Wrapper = styled.span`
  padding: 8px 12px;
  color: ${COLORS.white};
  background: ${props => props.$bgColor};
  border-radius: 2px;
  font-weight: ${WEIGHTS.semiBold};
  position: absolute;
  top: 12px;
  right: -8px;
`

export default Flag;

function decideSettings(type) {
  let settings = {
    text: "",
    bgColor: ""
  }

  if(type === "on-sale") {
    settings = {
      ...settings,
      text: "Sale",
      bgColor: COLORS.primary
    }
  }
  else if(type === "new-release") {
    settings = {
      ...settings,
      text: "Just Release!",
      bgColor: COLORS.secondary
    }
  };

  return settings;
}