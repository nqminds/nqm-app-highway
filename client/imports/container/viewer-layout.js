import loadResource from "../composers/load-resource";
import VisualExplorer from "../components/viewer";
import {composeWithTracker} from "react-komposer";

export default composeWithTracker(loadResource)(VisualExplorer);
