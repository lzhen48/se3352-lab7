public class pipeFilter {
    public static void main(String[] args) {
        //Define temperature array
        Double[] tempArray = {4.5, 12.7, 11.0, 18.9, 7.90, 5.32}; //define the array of temperature in celcius
        Double[] tempArray1; //array to save the list removed the max value
        Double[] tempArray2; //array to save the list removed the min value
        Double[] tempArray3; //array to save the list when every value was multiplied by the Fahrenheit equation
        Double[] tempArray4;

        Arrays.parallelSort(tempArray); //sorting the array from min to max

        tempArray1 = Arrays.copyOf(tempArray, tempArray.length-1);

        tempArray2 = Arrays.copyOfRange(tempArray1, 1, tempArray1.length);

        tempArray3 = new Double[tempArray2.length];

        for(int i = 0; i < tempArray2.length; i++) {
            tempArray3[i] = (tempArray2[i] * 9/5) + 32;
        }

        Arrays.asList(tempArray3).stream().sorted(Collections.reverseOrder()).forEach(System.out :: println);
}


    }
