header_file="header.txt"

curr_version=`grep version $header_file | cut -d "." -f 1,2,3 | cut -d " " -f 3` # Extract version
echo "Curr Version: $curr_version"

curr_version_without_revision=`grep version $header_file| cut -d "." -f 1,2| cut -d " " -f 3`
echo "Curr Version without revision: $curr_version_without_revision" # Extract major.minor

curr_version_revision=`grep version $header_file | cut -d "." -f 3` # Extract revision
echo "Curr Revision: $curr_version_revision"

new_version_revision=`expr $curr_version_revision + 1` # Increment revision
echo "New Revision: $new_version_revision"

new_version="$curr_version_without_revision.$new_version_revision" # Merge "current major.minor" + "." + "incremented revision"
echo "New Version: $new_version"
sed -i "s/$curr_version/$new_version/g" $header_file # Replace versions





