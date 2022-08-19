import './styles.css';
import { buildContainer, buildHeader, buildContent } from './components';
import { citySubmit, tempToggleBtn } from './events';
import tempToggle from './temptoggle';

buildContainer();
buildHeader();
citySubmit();
tempToggleBtn();
