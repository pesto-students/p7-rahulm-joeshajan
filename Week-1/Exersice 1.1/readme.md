# How does a browser work?

The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

# What are the high-level components of a browser?

**The user interface** : this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where we see the requested page.

**The browser engine** : marshals actions between the UI and the rendering engine.

**The rendering engine** : responsible for displaying requested content. The rendering engine parses HTML and CSS and displays the parsed content on the screen.

**Networking** : for network calls such as HTTP requests, using different implementations for different platforms behind a platform-independent interface.

**UI backend** : used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform-specific. Underneath it uses operating system user interface methods.

**JavaScript interpreter** : Used to parse and execute JavaScript code.

**Data storage** : This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

![High level components](./images/High-level-components.png?raw=true "Title")

# Rendering engine

The responsibility of the rendering engine is to display the requested contents on the browser screen.

The different steps of the rendering engine

1. **Parce HTML and create a dom tree:** The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree".
2. **Create render tree from dom tree:** While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.
3. **Layout the render tree:** When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow. HTML uses a flow-based layout. The layout is a recursive process. It begins at the root renderer, which corresponds to the \<html\> element of the HTML document. The layout continues recursively through some or all of the frame hierarchy.
4. **Painting:** In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. The painting uses the UI infrastructure component.

![How rendering works](./images/How-rendering-works.png?raw=true "Title")

# Parsing

Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

**Parsing HTML** : conventional parser topics do not apply to HTML.HTML cannot easily be defined by a context-free grammar that parsers need. There is a formal format for defining HTML - DTD (Document Type Definition) - but it is not context-free grammar.

**Parsing CSS** : WebKit uses Flex and Bison parser generators to create parsers automatically from the CSS grammar files.

# Order of script processing

**Script** : The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a \<script\> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched.

**stylesheet** : Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing. There is an issue, though, of scripts asking for style information during the document parsing stage. If the style is not loaded and parsed yet, the script will get wrong answers and apparently this caused lots of problems.
