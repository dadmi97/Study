import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button/index';

const Container = Styled.SafeAreaView`
    flex: 1;
`;
const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TitleLabel = Styled.Text`
    font-size: 24px;
`;
const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;
const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;
const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {
  title?: string;
  initValue: number;
}
interface State {
  count: number;
  error: boolean;
}
class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log('constructor');

    this.state = {
      count: props.initValue,
      error: false,
    };
  }
  render() {
    const {title} = this.props;
    const {count, error} = this.state;
    return (
      <Container>
        {!error && (
          {title && (
            <TitleContainer>
              <TitleLabel>{title}</TitleLabel>
            </TitleContainer>
          )}
          <CountContainer>
            <CountLabel>{count}</CountLabel>
          </CountContainer>
          <ButtonContainer>
            <Button
              iconName="plus"
              onPress={() => this.setState({count: count + 1})}
            />
            <Button
              iconName="minus"
              onPress={() => this.setState({count: count - 1})}
            />
          </ButtonContainer>
        )}
      </Container>
    );
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({
      error: true,
    });
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.id !== prevState.id){
      return { value: nextProps.value };
    }
    return null
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return nextProps.id !=== this.props.id;
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.id !== prevState.id){
      return { value: nextProps.value };
    }
    return null
  }
}

export default Counter;
