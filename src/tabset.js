import React from "react";
import {useTab, useTabList, useTabPanel} from 'react-aria';
import {Item, useTabListState} from 'react-stately';

function Tabs(props) {
  let state = useTabListState(props);
  let ref = React.useRef(null);
  let { tabListProps } = useTabList(props, state, ref);
  return (
    <div className={`tabs ${props.orientation || ''}`}>
      <div {...tabListProps} ref={ref}>
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
}

function Tab({ item, state }) {
  let { key, rendered } = item;
  let ref = React.useRef(null);
  let { tabProps } = useTab({ key }, state, ref);
  return (
    <div {...tabProps} ref={ref}>
      {rendered}
    </div>
  );
}

function TabPanel({ state, ...props }) {
  let ref = React.useRef(null);
  let { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <div {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  );
}

export default {Tabs, Item, TabPanel};

