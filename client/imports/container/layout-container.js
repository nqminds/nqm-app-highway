import Layout from "../components/layout";
import {composeWithTracker} from "react-komposer";
import checkAuthenticated from "../composers/authenticated";

export default composeWithTracker(checkAuthenticated)(Layout);;
