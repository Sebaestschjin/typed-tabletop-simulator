--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
XmlUi = {createElement = function(tag, props, ...)
    local children = {...}
    if type(tag) == "function" then
        return tag(nil, props or ({}), children)
    end
    return {tag = tag, attributes = props or ({}), children = children}
end}
jsx = XmlUi:createElement(
    "button",
    nil,
    XmlUi:createElement("button", nil, "A"),
    XmlUi:createElement("button", nil, "B")
)
