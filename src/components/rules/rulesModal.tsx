import styled from "styled-components"
import rules from "../../assets/image-rules-bonus.svg"
import Modal, { ModalProps } from "../core/modal"

const StyledRules = styled.div`
  text-align: center;
  width: 100%;
`

const RulesModal: React.FC<ModalProps> = props => (
  <Modal {...props} header="rules">
    <StyledRules>
      <img
        src={rules}
        alt="Rule set for 'Rock, Paper, Scissors, Lizard, Spock'"
      />
    </StyledRules>
  </Modal>
)

export default RulesModal
