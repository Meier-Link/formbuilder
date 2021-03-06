/** @jsx React.DOM */

"use strict";

var React = require("react");
var CheckboxesEditor = require("./Checkboxes").Editor;
var RendererMixin = require("./RendererMixin");

var RadioButtonsRenderer = React.createClass({
  mixins: [RendererMixin],
  render: function() {
    var values = this.props.data.values || [];
    return <form className="form-horizontal" role="form">
      <div className="form-group">
        <label htmlFor="label" className="col-sm-4 control-label">
          {this.props.data.label}{this.required()}
        </label>
        <div className="col-sm-8">
        { values.map(function(value, i) {
          return <div key={i} className="radio">
            <label>
              <input type="radio" /> {value}
            </label>
          </div>;
          })
        }
        </div>
      </div>
    </form>;
  }
});

module.exports = {
  Editor: CheckboxesEditor,
  Renderer: RadioButtonsRenderer
};
