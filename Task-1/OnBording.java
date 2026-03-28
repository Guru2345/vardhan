import java.util.Scanner;

public class OnboardingTracker {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter your name:");
        String name = sc.nextLine();

        System.out.println("Enter completed days (1-9):");
        int days = sc.nextInt();

        System.out.println("\n--- Onboarding Summary ---");
        System.out.println("Name: " + name);

        if (days <= 2) {
            System.out.println("Stage: Onboarding & Orientation");
        } else if (days <= 5) {
            System.out.println("Stage: Environment Setup");
        } else {
            System.out.println("Stage: Android Basics");
        }

        System.out.println("Progress: " + (days * 100 / 9) + "% completed");

        sc.close();
    }
}