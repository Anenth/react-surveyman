var React = require('react');

var DraggableBlock = require('./DraggableBlock'),
    DraggableOption = require('./DraggableOption'),
    DraggableQuestion = require('./DraggableQuestion');

var Toolbox = React.createClass({
    render: function() {
        return (
            <div className="toolbox">
                <h3>ToolBox</h3>
                <div className="widgets-area">
                    <DraggableBlock />
                    <DraggableQuestion />
                    <DraggableOption />
                </div>
            </div>
        )
    }
});

module.exports = Toolbox;
