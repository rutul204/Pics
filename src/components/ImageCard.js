import React from 'react';

class ImageCard extends React.Component{
    constructor(){
        super();
        this.state = { spans : 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/5);
        this.setState({ spans: spans });
    }

    render(){
        const { description, urls } = this.props.image; 
        return (
            <div style={{ gridRowEnd : `span ${this.state.spans}` }}>
                <img alt={description} src={urls.regular} ref={this.imageRef} />
            </div>
        );
    }
}

export default ImageCard;