import AppBody from "../AppBody";
import {Wrapper} from "../../components/swap/styleds";
import React/* , {useState} */ from 'react'
import PurchaseForm, {Data } from "../../components/PurchaseForm"
// import TextInput from "../../components/PurchaseForm/input"
import {ButtonPrimary} from "../../components/Button";
// import FiatInputPanel from "../../components/FiatInputPanel";
// import { USD } from '../../constants/fiat'
// import {useQuoteRequest} from '../../state/wyre/hooks'
// import {useActiveWeb3React} from "../../hooks";
import { useTranslation } from 'react-i18next'
import { Text, /* Text */ } from 'rebass'
// import { Input as NumericalInput } from '../../components/NumericalInput'
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



export default function Buy() {
  // const { account } = useActiveWeb3React()
  // const [amount, setAmount] = useState('')
  // const [fieldError, setFieldError] = useState(true)
  // const [formError, setFormError] = useState(false)
  // const [fiat, setFiat] = useState(USD)
  // useQuoteRequest(account, amount, fiat.symbol)
  // const ableToBuy = account && Number(amount)
  const { t } = useTranslation()

  const handleSubmit = (data: Data) => {
    console.log(1);
  }

  // const onMax = () => {
  //   setAmount('1600');
  // }

  return (
    <>
      <AppBody>
        <Wrapper id="normal-page">
          <Text fontSize="30px" textAlign="center" mb="30px">{t('Claim your SPC')}</Text>
          <PurchaseForm onSubmit={handleSubmit}>
            <FormInner>
              <Text fontSize="18px" textAlign="center" mb="20px">{t('Presale ends now')}</Text>
              <Text fontSize="18px" textAlign="center" mb="20px">{t('You can claim your SPCs')}</Text>
              <Text fontSize="18px" textAlign="center" mb="20px">{t('200 SPCs are claimable for you')}</Text>
              <ButtonPrimary type="submit" style={{ margin: '20px 0 0 0' }}>
                {t('Claim')}
              </ButtonPrimary>
            </FormInner>
          </PurchaseForm>
        </Wrapper>
      </AppBody>
    </>
    )
}
