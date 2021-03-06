import React from 'react';
import {Container, Inner, Pane, Title, Item, SubTitle, Image} from './styles/jumbotron';

const Jumbotron = ({children, direction = 'row', ...restProps}) => (

	<Item {...restProps}>
		<Inner direction={direction}>
			{children}
		</Inner>
	</Item>

);

Jumbotron.Item = function JumbotronItem({children, ...restProps}) {

}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
	return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}) {
	return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
	return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
	return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({...restProps}) {
	return <Image {...restProps} />
}

export default Jumbotron;