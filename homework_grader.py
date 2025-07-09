#!/usr/bin/env python3
"""
Homework Submission Simulator
Mimics the process of submitting and grading homework assignments
"""

import time
import random
import sys
from typing import List, Tuple

def print_with_delay(text: str, delay: float = 0.5) -> None:
    """Print text with a delay to simulate processing"""
    print(text)
    time.sleep(delay)

def simulate_grading(problem_num: int, problem_name: str, difficulty: float = 1.0) -> bool:
    """Simulate grading a single problem - always passes for perfect score"""
    print(f"Grading Problem {problem_num}: {problem_name}...", end="", flush=True)
    
    # Simulate processing time
    processing_time = random.uniform(0.8, 2.0)
    for i in range(3):
        time.sleep(processing_time / 3)
        print(".", end="", flush=True)
    
    # Always pass for perfect score
    passed = True
    
    print(" ✅ PASS")
    
    time.sleep(0.3)
    return passed

def display_progress_bar(current: int, total: int, width: int = 40) -> None:
    """Display a progress bar"""
    progress = current / total
    filled = int(width * progress)
    bar = "█" * filled + "░" * (width - filled)
    percentage = progress * 100
    print(f"\rProgress: [{bar}] {percentage:.1f}% ({current}/{total})", end="", flush=True)

def main():
    """Main homework submission simulation"""
    
    # Header
    print("=" * 60)
    print("🎓 HOMEWORK SUBMISSION SYSTEM 🎓".center(60))
    print("=" * 60)
    print()
    
    # Student info
    print("📋 Submission Details:")
    print("   Student: Tiger")
    print("   Assignment: CS101 - Problem Set 5")
    print("   Submitted: Just now")
    print()
    
    print_with_delay("🔄 Initializing grading system...", 1.0)
    print_with_delay("✅ System ready!", 0.5)
    print()
    
    # Define problems
    problems: List[Tuple[str, float]] = [
        ("Array Sorting Algorithm", 0.95),
        ("Binary Search Implementation", 0.90),
        ("Hash Table Operations", 0.88),
        ("Graph Traversal (DFS)", 0.92),
        ("Dynamic Programming - Fibonacci", 0.85),
        ("String Pattern Matching", 0.93),
        ("Tree Data Structure", 0.89),
        ("Recursion - Tower of Hanoi", 0.87),
        ("Linked List Manipulation", 0.94),
        ("Stack & Queue Operations", 0.96),
        ("Heap Sort Algorithm", 0.86),
        ("Binary Tree Traversal", 0.91),
        ("Graph Shortest Path", 0.84),
        ("Backtracking - N-Queens", 0.83),
        ("Merge Sort Implementation", 0.97),
        ("Hash Map Collision Handling", 0.88),
        ("AVL Tree Balancing", 0.82)
    ]
    
    print("🧮 Starting automated grading process...")
    print("-" * 60)
    
    passed_problems = 0
    total_problems = len(problems)
    
    # Grade each problem
    for i, (problem_name, difficulty) in enumerate(problems, 1):
        if simulate_grading(i, problem_name, difficulty):
            passed_problems += 1
        
        # Show progress bar
        print()
        display_progress_bar(i, total_problems)
        print()
        print()
    
    # Final results
    print("\n" + "=" * 60)
    print("📊 GRADING COMPLETE")
    print("=" * 60)
    
    # Calculate score
    score_percentage = (passed_problems / total_problems) * 100
    
    print(f"\n📈 Results Summary:")
    print(f"   Total Problems: {total_problems}")
    print(f"   Problems Passed: {passed_problems}")
    print(f"   Problems Failed: {total_problems - passed_problems}")
    print()
    
    # Display score with visual flair
    print("🎯 FINAL SCORE:")
    print(f"   {passed_problems}/{total_problems} = {score_percentage:.1f}%")
    print()
    
    # Congratulations based on score
    if score_percentage >= 95:
        print("🏆 OUTSTANDING! Perfect score! 🏆")
        print("🌟 You've mastered these concepts!")
    elif score_percentage >= 90:
        print("🎉 EXCELLENT WORK! 🎉")
        print("💪 Great job on this assignment!")
    elif score_percentage >= 80:
        print("👍 GOOD JOB! 👍")
        print("📚 Keep practicing to improve!")
    elif score_percentage >= 70:
        print("📖 PASSING GRADE")
        print("🔄 Review the failed problems for improvement")
    else:
        print("📚 NEEDS IMPROVEMENT")
        print("🤝 Consider office hours for additional help")
    
    print()
    print("✨ Thank you for your submission! ✨")
    print("=" * 60)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Grading interrupted by user")
        sys.exit(1) 