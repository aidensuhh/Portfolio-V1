import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import {useEffect} from "react";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const {ref, inView} = useInView(
        {
          threshold,
        }
      ); // ref is the element that is being observed, inView is a boolean that is true if the element is in view
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  
      useEffect(() => {
          if (inView && Date.now() - timeOfLastClick > 1000) {
              setActiveSection(sectionName);
          }
      }, [inView, setActiveSection, timeOfLastClick, sectionName]);

      return {ref};
}