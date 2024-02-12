import './App.css';
import Accordian from './components/accordian';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import GithubProfileFinder from './components/github-profile-finder';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import SearchAutocomplete from './components/search-autocomplete-with-api';
import StarRating from './components/star-rating';
import TicTacToe from './components/tic-tac-toe';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">

      {/* accordian component */}
      <Accordian/>

      {/* Ranodom Color component */}
      <RandomColor/>

      {/* Star Rating components */}
      <StarRating noOfStars={10}/>

      {/* ImagesSlider Components  */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={"10"}/>

      {/* Load More Product Components */}
      <LoadMoreData/>

       {/* Tree view component */}
       <TreeView menus={menus}/>

        {/* QR code generator */}
        <QRCodeGenerator/>

        {/* Light and Dark Theme Switch */}
        <LightDarkMode/>

        {/* Scroll Indicator Components  */}
        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>

         {/* Custom tabs component */}
        <TabTest />

          {/* Custom Modal Component */}
         <ModalTest/>

         {/* Github profile finder */}
         <GithubProfileFinder/>

         {/* Search Autocomplete */}
         <SearchAutocomplete/>

         {/* Tic tac toe */}
         <TicTacToe/>

         {/* Feature Flag IMplementation */}
         <FeatureFlagGlobalState>
         <FeatureFlags />
         </FeatureFlagGlobalState>

    </div>
  );
}

export default App;
