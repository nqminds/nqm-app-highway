import AppDisplay from "./app-display";
import {compose} from "react-komposer";
import loadSubscriptionData from "../../composers/load-resource-data";

export default compose(loadSubscriptionData)(AppDisplay);