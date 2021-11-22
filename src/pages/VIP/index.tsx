import AppBody from "../AppBody";
import {Wrapper} from "../../components/swap/styleds";
import React, {useState} from 'react'
import PurchaseForm, {Data } from "../../components/PurchaseForm"
// import TextInput from "../../components/PurchaseForm/input"
import {ButtonPrimary} from "../../components/Button";
// import FiatInputPanel from "../../components/FiatInputPanel";
// import { USD } from '../../constants/fiat'
// import {useQuoteRequest} from '../../state/wyre/hooks'
// import {useActiveWeb3React} from "../../hooks";
import { useTranslation } from 'react-i18next'
import { Text, /* Text */ } from 'rebass'
import { Input as NumericalInput } from '../../components/NumericalInput'
import styled from "styled-components";
// import AppBody from "../AppBody";
// import { useIsDarkMode } from "../../state/user/hooks";

const FormInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(86, 90, 105);
  padding: 16px 12px;
  border-radius: 12px;
`;

const StyledBalanceMax = styled.button`
  height: 48px;
  background-color: ${({ theme }) => theme.primary5};
  border: 1px solid ${({ theme }) => theme.primary5};
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.primaryText1};
  :hover {
    border: 1px solid ${({ theme }) => theme.primary1};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
    outline: none;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin-right: 0.5rem;
  `};
`

const StyledInput = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.2s ease 0s;
`;

export default function Buy() {
  // const { account } = useActiveWeb3React()
  const [amount, setAmount] = useState('')
  // const [fieldError, setFieldError] = useState(true)
  // const [formError, setFormError] = useState(false)
  // const [fiat, setFiat] = useState(USD)
  // useQuoteRequest(account, amount, fiat.symbol)
  // const ableToBuy = account && Number(amount)
  const { t } = useTranslation()

  const handleSubmit = (data: Data) => {
    console.log(1);
  }

  const onMax = () => {
    setAmount('1600');
  }

  return (
    <>
      <AppBody>
        <Wrapper id="normal-page">
          <Text fontSize="30px" textAlign="center" mb="30px">{t('VIP Whitelist')}</Text>
          <PurchaseForm onSubmit={handleSubmit}>
            <FormInner>
              <Text fontSize="18px" textAlign="center" mb="20px">{t('Enter the amount you want to participate (MIM)')}</Text>
              <Text fontSize="18px" textAlign="center" mb="20px">{t('The maximum amount is 1600 $MIM')}</Text>
              <Text fontSize="18px" textAlign="center" mb="20px">{t('1 SPC = 0.02 $MIM')}</Text>
              <StyledInput>
                <NumericalInput className="token-amount-input" value={amount} onUserInput={setAmount}/>          
                <StyledBalanceMax onClick={onMax}>{t('Max')}</StyledBalanceMax>
              </StyledInput>
              <ButtonPrimary type="submit" style={{ margin: '20px 0 0 0' }}>
                {t('Approve MIM')}
              </ButtonPrimary>
            </FormInner>
          </PurchaseForm>
        </Wrapper>
      </AppBody>
    </>
    )
}
