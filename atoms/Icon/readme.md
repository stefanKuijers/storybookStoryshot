# Icon Component
The icon component is simply displaying one of the many icons we have in our Icon set for us. This deserves a readme cause the adding of svgs is trivial. 

## Maintainance
When you add a new Icon please follow these steps:
1. Export from Figma and start clean up:
   1. remove _title_ & _desc_ tags
   2. remove unneeded _g_ tags so that only the _g_ remains with a _transform_ attribute.
   3. replace values of all the _fill_ props with _currentColor_ at _use_ tags
   4. check whether you have the same amount of _use_ tags and _path_ tags. 
      - If not; duplicate the _path_ which are used multiple times. You can identify them by their ids.
   5. copy the _fill_ and _transform_ props with their values to the _path_ tag they reference with their _pathId_ prop.
   6. move all _path_ tags into the root _g_ (see step 2)
   7. remove all _use_ and _def_ tags.
2. move cleaned svg file into the _Icons/assets_ folder. 
3. update _Icon/Icon.interfaces.ts@names:type_ with the new icon name(s).
4. update _stories/atoms/Icon.story.tsx@names:string[]_
5. test the icon in storybook. _Atoms/Icon/Full Set_
