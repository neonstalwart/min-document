module.exports = DOMText

function DOMText(value) {
    if (!(this instanceof DOMText)) {
        return new DOMText(value)
    }

    this.data = value || ""
    this.length = this.data.length
}

DOMText.prototype.type = "DOMTextNode"
DOMText.prototype.nodeType = 3

DOMText.prototype.toString = function _Text_toString() {
    return this.data
}

DOMText.prototype.replaceData = function replaceData(index, length, value) {
    var current = this.data
    var left = current.substring(0, index)
    var right = current.substring(index + length, current.length)
    this.data = left + value + right
    this.length = this.data.length
}