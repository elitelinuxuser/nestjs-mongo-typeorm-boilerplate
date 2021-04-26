import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../../../utils/inMemoryMongo.util';
import { User, UserDocument, UserSchema } from '../entities/user.entity';
import { UserRepository } from '../user.repository';
import { UserService } from '../user.service';

// I'm lazy and like to have functions that can be re-used to deal with a lot of my initialization/creation logic
const mockUser = (
  name = 'Ventus',
  id = 'a uuid',
  email = 'lucifer@gmail.com',
  password = 'Lucifer_01',
): User & { _id: string } => ({
  name,
  _id: id,
  email,
  password,
});

// still lazy, but this time using an object instead of multiple parameters
const mockUserDocument = (
  mock?: Partial<User & { id: string }>,
): Partial<UserDocument> => ({
  name: mock?.name || 'Ventus',
  _id: mock?.id || 'a uuid',
  email: mock?.email || 'lucifer@gmail.com',
  password: mock?.password || 'Lucifer_01',
});

const userArray = [
  mockUser(),
  mockUser('Vitani', 'a new uuid', 'lucifer@gmail.com', 'Tabby'),
  mockUser('Simba', 'the king', 'life@gmail.com', 'Lion'),
];

const userDocumentArray = [
  mockUserDocument(),
  mockUserDocument({
    name: 'Vitani',
    id: 'a new uuid',
    email: 'lucifer@gmail.com',
    password: 'Tabby',
  }),
  mockUserDocument({
    name: 'Simba',
    email: 'life@gmail.com',
    id: 'the king',
    password: 'Lion',
  }),
];

describe('UserService', () => {
  let service: UserService;
  let userModel: Model<UserDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
      providers: [UserRepository, UserService],
    }).compile();

    service = module.get<UserService>(UserService);
    userModel = module.get<Model<UserDocument>>(getModelToken(User.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all users', async () => {
    jest.spyOn(userModel, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(userDocumentArray),
    } as any);
    const users = await service.findAll();
    expect(users).toEqual(userArray);
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });
});
