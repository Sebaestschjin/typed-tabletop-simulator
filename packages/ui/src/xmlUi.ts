type CreateElementFunction = (this: void, props?: any, ...children: any[]) => unknown;

function createElement(this: any, tag: string | CreateElementFunction, props?: object, ...children: any[]): any {
    if (typeof tag === "function") {
        return tag(props ?? {}, children);
    }

    let theChildren: Maybe<any[]> = children;

    let value: Maybe<string> = undefined;
    if (typeof children[0] === "string") {
        value = children[0];
        theChildren = undefined;
    } else if (children[0] === undefined) {
        value = undefined;
        theChildren = undefined;
    }

    return {
        tag: tag,
        attributes: props ?? {},
        children: theChildren,
        value: value,
    };
}

export const XmlUi = {
    createElement: createElement,
};
