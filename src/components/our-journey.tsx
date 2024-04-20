import { useRef } from "react";
import "./our-journey.css";
import { motion, useScroll } from "framer-motion";
import { TimelineItem } from "./timeline-item";

export function OurJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <div className="container">
      <motion.div
        className="progress-bar"
        style={{ scaleY: scrollYProgress, originY: 0 }}
      ></motion.div>

      <div className="journey-container" ref={containerRef}>
        <div className="content">
          <TimelineItem
            containerRef={containerRef}
            image="/static/pic1.JPG"
            alignment="left"
          >
            <h2>2018</h2>
            <p>
              In eget sodales arcu, consectetur efficitur metus. Duis efficitur
              tincidunt odio, sit amet laoreet massa fringilla eu.
            </p>
            <p>
              Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
              Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus
              arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.
            </p>
            <p>
              Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
            </p>
            <p>
              Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
              pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
              suscipit leo.
            </p>
          </TimelineItem>
          <TimelineItem
            containerRef={containerRef}
            image="/static/pic1.JPG"
            alignment="right"
          >
            <h2>2019</h2>
            <p>
              In eget sodales arcu, consectetur efficitur metus. Duis efficitur
              tincidunt odio, sit amet laoreet massa fringilla eu.
            </p>
            <p>
              Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
              Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus
              arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.
            </p>
            <p>
              Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
            </p>
            <p>
              Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
              pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
              suscipit leo.
            </p>
          </TimelineItem>
          <TimelineItem
            containerRef={containerRef}
            image="/static/pic1.JPG"
            alignment="left"
          >
            <h2>2018</h2>
            <p>
              In eget sodales arcu, consectetur efficitur metus. Duis efficitur
              tincidunt odio, sit amet laoreet massa fringilla eu.
            </p>
            <p>
              Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
              Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus
              arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.
            </p>
            <p>
              Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
            </p>
            <p>
              Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
              pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
              suscipit leo.
            </p>
          </TimelineItem>
        </div>
      </div>
    </div>
  );
}
