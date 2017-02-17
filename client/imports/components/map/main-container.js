import {compose} from "react-komposer";
import loadCarmeraData from "../../composers/load-resource-data";
import MainDisplay from "./main-display";

export default compose(loadCarmeraData)(MainDisplay);
