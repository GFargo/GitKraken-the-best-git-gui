// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  badpuns_gif: require("../assets/badpuns.gif"),
  stageallthethings: require("../assets/stage-all-things.jpg"),
  gitkraken_logo_small: require("../assets/gitkraken_logo_1.png"),
  gitkraken_logo: require("../assets/gitkraken_logo_2.png"),
  classic_gif: require("../assets/classic2.gif"),
  unwind_gif: require("../assets/unwind.gif"),
  contender_gif: require("../assets/NewContender.gif"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  // primary: "#ff4081"
  // primary: "#CC3300"
  // primary: "#0099CC"
  // primary: "#996699"
  primary: "#673AB7"
  // primary: "#3D72A4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>


            <Slide transition={["zoom"]} bgColor="primary">
                <Heading size={1} fit caps lineHeight={1} textColor="black">
                    Git Happens
                </Heading>
                <Heading size={1} fit caps>
                    CLI Tricks & Workflow Tips to help you
                </Heading>
                <Heading size={1} caps textColor="black">
                    Git Kraken
                </Heading>
            </Slide>

            <Slide transition={["slide"]} bgColor="black">
                <Image src={images.badpuns_gif.replace("/", "")} margin="0px auto 40px" height="320px"/>
                <Appear fid="1">
	                <Heading size={1} caps textColor="primary" textFont="primary">
	                   What to Expect...
	                </Heading>
                </Appear>
            </Slide>

            <Slide transition={["slide"]} bgColor="black" notes="Git Log">
                <Heading size={1} caps textColor="primary" textFont="primary">
                    "I need to look back through the commit history"
                </Heading>
            </Slide>

            <Slide transition={["zoom", "fade"]} bgColor="primary" notes="Git Log Examples">
                <Layout>
                    <Fill align="left">
                        <Heading size={6} textAlign="left" margin="32px auto" caps textColor="tertiary" textFont="primary">
                            The CLI method
                            <Image src={images.classic_gif.replace("/", "")} margin="16px auto"/>
                        </Heading>
                    </Fill>
                    <Fill>
                        <CodePane
                            lang="bash"
                            source={require("raw!../assets/code/git-log.example")}
                        />
                    </Fill>
                </Layout>
            </Slide>

            <Slide transition={["zoom", "fade"]} bgColor="primary" notes="Git Log Graph">
                <CodePane
                    lang="bash"
                    margin="20px auto"
                    source={require("raw!../assets/code/git-log-graph.example")}
                />
            </Slide>

            <Slide transition={["slide"]} bgColor="black">
                <Heading size={1} caps fit textColor="primary" textFont="primary">
                    A few Advantages of a GUI
                </Heading>
                <Layout>
                    <Fill>
                        <Image transition={["fade", "zoom"]} src={images.contender_gif.replace("/", "")} margin="40px auto 0" height="280"/>
                    </Fill>
                    <Fill>
                        <Image transition={["fade", "zoom"]} src={images.gitkraken_logo.replace("/", "")} margin="40px auto 0" height="280"/>
                    </Fill>
                </Layout>
            </Slide>




            <Slide transition={["zoom", "fade"]} bgColor="black" notes="Breaking Apart Work">
                <Image src={images.unwind_gif.replace("/", "")} margin="0px auto 40px" height="275px"/>
                <Heading size={4} caps textColor="primary" textFont="primary">
                    "I was caught in a coding trance and now have a 16 files to stage..."
                </Heading>
            </Slide>

            <Slide transition={["zoom", "fade"]} bgColor="black" notes="Breaking Apart Work">
                <Image src={images.stageallthethings.replace("/", "")} margin="0px auto 40px" height="320px"/>
                <CodePane
                    margin="20px auto"
                    source={require("raw!../assets/code/git-add.example")}
                />
                <Heading size={1} caps textColor="primary" textFont="primary">
                    🤔
                </Heading>
            </Slide>

            <Slide transition={["zoom", "fade"]} bgColor="primary" notes="Git Log Examples">
                <Layout>
                    <Fill>
                        <CodePane
                            lang="bash"
                            source={require("raw!../assets/code/git-add-patch.example")}
                        />
                    </Fill>
                    <Fill align="left">
                        <Heading textSize={36} caps textColor="white" textAlign="right" padding="0 0 0 20px" textFont="primary">
                            Git patch steps through each change individually, allowing you to stage only what is important.
                        </Heading>

                    </Fill>
                </Layout>
            </Slide>

            <Slide transition={["zoom", "fade"]} bgColor="primary" notes="Git Log Examples">
                <Layout>
                    <Fill>
                        <CodePane
                            lang="bash"
                            source={require("raw!../assets/code/git-add-interactive.example")}
                        />
                    </Fill>
                    <Fill textAlign="right">
                        <Heading textSize={36} caps textColor="white" textAlign="right" padding="0 0 0 20px" textFont="primary">
                            --interactive (or -i) is the big brother of --patch.  patch only lets you decide about the individual hunks in files whereas interactive enters the interactive mode.
                        </Heading>
                        <Link textAlign="right" textColor="white" href="http://nuclearsquid.com/writings/git-add/">Nuclear Squid</Link>
                    </Fill>
                </Layout>
            </Slide>






            <Slide transition={["zoom", "fade"]} bgColor="black" notes="Merge Conflicts">
                <Heading size={1} caps textColor="primary" textFont="primary">
                    "Always running into conflicts when I'm trying to merge my work..."
                </Heading>
            </Slide>

            <Slide transition={["spin", "slide"]} bgColor="black">
                <Heading size={6} caps textColor="primary" textFont="primary">
                    1. take time to understand what is happening.
                </Heading>

                <Heading size={6} caps textColor="primary" textFont="primary">
                    2. use the tool you feel most comfortable with.
                </Heading>

                <Heading margin="0 auto 32px" size={5} caps textColor="primary" textFont="primary">
                    3. when in doubt recompile.
                </Heading>


                <Layout>
                    <Fill>
                        <CodePane
                            lang="bash"
                            margin="20px auto"
                            source={require("raw!../assets/code/git-log-merge.example")}
                        />
                    </Fill>
                    <Fill>
                        <BlockQuote>
                            <Quote textSize={24} fit caps textColor="white">
                                Displays all of the commits that touched that file in between the common ancestor and the two heads you are merging.
                            </Quote>
                            <Cite textColor="white" textSize={14}>
                                <Link textColor="white" href="http://stackoverflow.com/a/7589612/1731759">Peter Mortensen @ S.O.</Link>
                            </Cite>
                        </BlockQuote>
                    </Fill>
                </Layout>
            </Slide>




            <Slide transition={["zoom", "fade"]} bgColor="black" notes="Creating a PR">
                <Heading size={1} caps textColor="primary" textFont="primary">
                    "I want to create a new PR"
                </Heading>
            </Slide>

            <Slide transition={["zoom", "fade"]} bgColor="primary" notes="Git Log Graph">
                <Layout>
                    <Fill>
                        <Heading size={6} textAlign="left" caps padding="0 24px 0 0" textColor="tertiary" textFont="primary">
                            open a compare against the current branch on github
                        </Heading>
                    </Fill>
                    <Fill>
                        <CodePane
                            lang="bash"
                            source={require("raw!../assets/code/git-cpr.example")}
                        />
                    </Fill>
                </Layout>
            </Slide>






            <Slide transition={["zoom", "fade"]} bgColor="black" notes="Multiple Remotes">
                <Heading size={1} caps textColor="primary" textFont="primary">
				    "Interacting with multiple remotes"
                </Heading>
            </Slide>

            <Slide transition={["spin", "slide"]} bgColor="tertiary">
                <Heading size={1} caps textColor="primary" textFont="primary">
                    Additional Resources
                </Heading>
                <List>
                    <ListItem><Link href="https://githowto.com">GitHowTo.com</Link></ListItem>
                    <ListItem><Link href="http://ohshitgit.com/">OhSh*tGit.com</Link></ListItem>
                    <ListItem><Link href="https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/git/git.plugin.zsh">oh-my-zsh git plugin</Link></ListItem>
                    <ListItem><Link href="http://codetunnel.io/tips-for-working-with-git/">CodeTunnel: Tips for Working with Git</Link></ListItem>
                    <ListItem><Link href="https://github.com/git-tips/tips">@git-tips: tips</Link></ListItem>
                    <ListItem><Link href="https://github.com/arslanbilal/git-cheat-sheet">@arslanbilal: git cheat sheet</Link></ListItem>
                </List>
            </Slide>




          <Slide transition={["slide"]}  bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>


          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>


          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>


          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>


          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>


          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
