/** @jsx React.DOM */

"use strict";

var React = require("react");

var TextAreaEditor = require("./TextArea").Editor;
var RendererMixin = require("./RendererMixin");

var TextRenderer = React.createClass({
  mixins: [RendererMixin],
  render: function() {
    return <form className="form-horizontal" role="form">
      <div className="form-group">
        <label htmlFor="label" className="col-sm-4 control-label">
          {this.props.data.label}{this.required()}
        </label>
        <div className="col-sm-8">
          <input type="text"
                 className="form-control"
                 id={this.props.data.name || "Label"}
                 placeholder={this.props.data.description} />
        </div>
      </div>
    </form>;
  }
});

module.exports = {
  Editor: TextAreaEditor,
  Renderer: TextRenderer
};

