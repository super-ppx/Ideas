import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  InputItem,
  TextareaItem,
  Button,
  WhiteSpace,
  ImagePicker
} from 'antd-mobile';
import { createForm } from 'rc-form';
import './IdeaCreateForm.css';

const data = [];

class IdeaCreateForm extends React.Component {
  state = {
    files: data,
    loading: false
  };
  onFileChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files
    });
  };
  create = () => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loding: false
      });
      this.props.history.push('/');
    }, 1500);
  };
  render() {
    const { className } = this.props;
    const { files } = this.state;
    return (
      <div className={`${className} idea-create-form`}>
        <WhiteSpace size="lg" />
        <InputItem
          placeholder="Title"
          clear
          maxLength={30}
          labelNumber=""
          className="idea-form__input"
        />
        <WhiteSpace />
        <TextareaItem
          placeholder="Leave a comment"
          rows={5}
          autoHeight
          count={500}
          className="idea-form__input"
        />
        <ImagePicker
          files={files}
          onChange={this.onFileChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 8}
          multiple={true}
        />
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.create}
        >
          Submit new idea
        </Button>
      </div>
    );
  }
}

export default withRouter(createForm()(IdeaCreateForm));
