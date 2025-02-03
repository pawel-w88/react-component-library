#!/bin/sh

proceed='n'
directory='./src/components'

while [ $proceed != "y" ];
do
    echo ""
    echo -n "Component Name? "
    read component
    echo "\n---------------------------\n"
    echo "This will create the following files:\n
    ./src/components/${component}/
    ./src/components/${component}/${component}.jsx
    ./src/components/${component}/${component}.scss
    ./src/components/${component}/index.js\n"
    echo "And add the line 'export { ${component} } from './components/${component}/';' to the library package.\n"
    echo -n "is this correct? (y/n): "
    read proceed
done

mkdir "${directory}/${component}/"
touch "${directory}/${component}/${component}.jsx"
touch "${directory}/${component}/${component}.scss"
touch "${directory}/${component}/index.js"

cat <<EOF >> "${directory}/${component}/${component}.jsx"
import React from 'react';

import './${component}.scss';

export const ${component} = ({ className, ...props }) => {
    return (
        <div className='${component} '>
            ${component} Initiated!
        </div>
    )
}
EOF

echo ".${component} {
    
}" >> "${directory}/${component}/${component}.scss"

echo "export * from './${component}';" >> "${directory}/${component}/index.js"
echo "export { ${component} } from './components/${component}/index.js';" >> "./src/components/index.js"
