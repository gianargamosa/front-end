import React from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import mentions from './mentions';
import editorStyles from './editorStyles.css';

const mentionPlugin = createMentionPlugin();
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

class SimpleMentionEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      suggestions: mentions,
    };
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  onSearchChange({ value }) {
    this.setState({ suggestions: defaultSuggestionsFilter(value, mentions) });
  }
  
  // onChange = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };

  // onSearchChange = ({ value }) => {
  //   this.setState({
  //     suggestions: defaultSuggestionsFilter(value, mentions),
  //   });
  // };

  // onAddMention = () => {
  //   // get the mention object selected
  // }

  focus() {
    this.editor.focus();
  }

  element(element) {
    this.editor = element;
  }

  // focus = () => {
  //   this.editor.focus();
  // };

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={this.element}
        />
        <MentionSuggestions
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
          onAddMention={this.onAddMention}
        />
      </div>
    );
  }
}

export default SimpleMentionEditor;
