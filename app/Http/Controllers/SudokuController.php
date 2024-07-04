<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Endroid\Sudoku\Sudoku;

class SudokuController extends Controller
{
    public function generate(Request $request)
    {
        $difficulty = $request->input('difficulty', 'easy');

        switch ($difficulty) {
            case 'medium':
                $difficultyLevel = Sudoku::LEVEL_MEDIUM;
                break;
            case 'hard':
                $difficultyLevel = Sudoku::LEVEL_HARD;
                break;
            case 'easy':
            default:
                $difficultyLevel = Sudoku::LEVEL_EASY;
                break;
        }

        try {
            $generator = new Sudoku();
            $board = $generator->generate($difficultyLevel);

            \Log::info('Generated Sudoku Board:', $board);  // Log the generated board
            return response()->json($board);
        } catch (\Exception $e) {
            \Log::error('Error generating Sudoku board:', ['error' => $e->getMessage()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Validate board method as before
}
