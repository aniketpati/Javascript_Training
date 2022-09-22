const arr = [1, 2, 7, 56, 555, 1033, 8991];
let flag =0;

function BinarySearch(key){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor(left + (right-left)/2);
        if(arr[mid]==key){
            console.log("Found at index", mid);
            flag=1;
            return;
        }
        else if(arr[mid]>key){
            right = mid -1;
        }
        else 
        left = mid + 1;

    }
}

BinarySearch(8);
if(flag==0)
console.log("Not in the list");