--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.createElement = function(tag, props, ...)
    local children = {...}
    if type(tag) == "function" then
        return tag(nil, props or ({}), children)
    end
    local theChildren = children
    local value = nil
    if type(children) == "string" then
        value = children
        theChildren = nil
    end
    return {tag = tag, attributes = props or ({}), children = theChildren, value = value}
end
return ____exports
