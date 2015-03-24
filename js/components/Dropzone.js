var ItemTypes = require('./ItemTypes.js');

var Dropzone = React.createClass({
    propTypes: {
        onBlockDropped: React.PropTypes.func,
        onQuestionDropped: React.PropTypes.func,
        onOptionDropped: React.PropTypes.func
    },
    mixins: [ReactDND.DragDropMixin],
    statics: {
        configureDragDrop: function(register) {
            register(ItemTypes.BLOCK, {
                dropTarget: {
                    acceptDrop: function(component, item) {
                        component.handleBlockDrop();
                    }
                }
            });

            register(ItemTypes.QUESTION, {
                dropTarget: {
                    acceptDrop: function(component, item) {
                        component.handleQuestionDrop();
                    }
                }
            });

            register(ItemTypes.OPTION, {
                dropTarget: {
                    acceptDrop: function(component, item) {
                        component.handleOptionDrop();
                    }
                }
            })
        }
    },
    handleBlockDrop: function() {
        this.props.onBlockDropped();
    },
    handleQuestionDrop: function() {
        this.props.onQuestionDropped();
    },
    handleOptionDrop: function() {
        this.props.onOptionDropped();
    },
    render: function() {
        var style = {},
            blockDropState = this.getDropState(ItemTypes.BLOCK),
            questionDropState = this.getDropState(ItemTypes.QUESTION),
            optionDropState = this.getDropState(ItemTypes.OPTION),
            isHovering = blockDropState.isHovering ||
                questionDropState.isHovering ||  optionDropState.isHovering,
            isDragging = blockDropState.isDragging ||
                questionDropState.isDragging || optionDropState.isDragging,
            backgroundColor;

        if (isHovering) {
            backgroundColor = '#CAD2C5';
        } else if (isDragging) {
            backgroundColor = '#52796F';
        }
        style.backgroundColor = backgroundColor;

        // define a set of item types the dropzone accepts
        var accepts = [ItemTypes.BLOCK, ItemTypes.QUESTION, ItemTypes.OPTION];

        return (
            <div {...this.dropTargetFor.apply(this, accepts)}
                style={style}
                className='dropzone'>
            {isHovering ? 'Release to drop' : 'Drag item here'}
            </div>
        )
    }
});

module.exports = Dropzone;
