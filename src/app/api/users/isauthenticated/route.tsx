import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/user.models';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';